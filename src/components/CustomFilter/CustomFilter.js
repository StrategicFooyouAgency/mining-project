import React, {useMemo, useState, useEffect} from 'react';
import './CustomFilter.scss';
import {Button, Checkbox, Slider} from "antd";

const CheckboxGroup = Checkbox.Group;
const CustomFilter = (props) => {
    const {data, selectedFilterData, onChange} = props;
    const [value, setValue] = useState({});

    useEffect(() => {
        if (selectedFilterData) {
            setValue(selectedFilterData);
        }
    }, [selectedFilterData])

    const filterCount = useMemo(() => {
        let arr = [];
        Object.keys(value).forEach(item => {
            if (Array.isArray(value[item])) {
                arr = [...arr, ...value[item]];
            }
        });
        return arr.length
    }, [value])

    const checkGroupChange = (title, checkedValues) => {
        // console.log(title)
        // console.log(checkedValues)
        const data = {...value};
        data[title] = checkedValues;
        setValue(data);
        onChange && onChange(data);
    }

    const clearFilter = () => {
        setValue({});
        onChange && onChange({});
    }

    const sliderChange = (key, data) => {
        const newValue = {...value};
        newValue[key] = data;
        setValue(newValue);
        onChange && onChange(newValue);
    }

    return (
        <div className='CustomFilter'>
            <div className="CustomFilter-top">
                Filter ({filterCount})
                <Button onClick={clearFilter} type='link'>clear filter</Button>
            </div>
            <div className="CustomFilter-body">
                {
                    data.map(filterGroup => (
                        <div key={filterGroup.key} className='CustomFilter-body-item'>
                            <div className="CustomFilter-body-item-title">{filterGroup.title}</div>
                            {
                                filterGroup.slider ?
                                    <Slider style={{marginBottom: '60px'}} min={0} max={7} range={false} marks={{0: '0', 7: '7'}}
                                            value={value[filterGroup.key] || 0}
                                            onChange={(value) => {
                                                sliderChange(filterGroup.key, value)
                                            }}/>
                                    :
                                    <CheckboxGroup value={value[filterGroup.key]} onChange={(checkedValues) => {
                                        checkGroupChange(filterGroup.key, checkedValues)
                                    }} options={filterGroup.children}/>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CustomFilter;