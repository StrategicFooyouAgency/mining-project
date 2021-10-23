import React, { Component } from 'react'
//import spine from '../../js/dist/iife/spine-webgl'
var spine =require('@esotericsoftware/spine-webgl')

class AppSpine {
	constructor(parts,anim) {
        this.canvas = null;
        this.atlas = null;
        this.skeletonData = null;
        this.skeleton = null;
        this.state = null;
        this.selectedSkins = [];
        this.skinThumbnails = {};
        this.lastBounds = {};
        this.parts = parts;
        this.anim = anim;
    }

    loadAssets(canvas) {
        canvas.assetManager.loadTextureAtlas("goblins-pma.atlas");
        canvas.assetManager.loadBinary("goblins-pro.skel");
    }

    initialize(canvas) {
        this.canvas = canvas;
        let assetManager = canvas.assetManager;
        this.atlas = canvas.assetManager.require("goblins-pma.atlas");
        let atlasLoader = new spine.AtlasAttachmentLoader(this.atlas);
        let skeletonBinary = new spine.SkeletonBinary(atlasLoader);
        this.skeletonData = skeletonBinary.readSkeletonData(assetManager.require("goblins-pro.skel"));
        this.skeleton = new spine.Skeleton(this.skeletonData);
        let stateData = new spine.AnimationStateData(this.skeletonData);
        this.state = new spine.AnimationState(stateData);
        this.state.setAnimation(0, String(this.anim), true);
        this.createUI(canvas);
        this.parts.map((item)=>{
            this.addSkin(item);
        }) 
    }

    addSkin(skinName) {
        if (this.selectedSkins.indexOf(skinName) !== -1) return;
        this.selectedSkins.push(skinName);
        this.updateSkin();
    }

    removeSkin(skinName) {
        let index = this.selectedSkins.indexOf(skinName);
        if (index === -1) return;
        this.selectedSkins.splice(index, 1);
        this.updateSkin();
    }

    updateSkin() {
        let newSkin = new spine.Skin("custom-skin");
        for (var skinName of this.selectedSkins) {
            newSkin.addSkin(this.skeletonData.findSkin(skinName));
        }
        this.skeleton.setSkin(newSkin);
        this.skeleton.setToSetupPose();
        this.skeleton.updateWorldTransform();
        let offset = new spine.Vector2(), size = new spine.Vector2();
        this.skeleton.getBounds(offset, size);
        this.lastBounds = { offset: offset, size: size };
    }

    createUI(canvas) {
        const THUMBNAIL_SIZE = 100;
        let renderer = canvas.renderer;
        let camera = renderer.camera;
        let oldWidth = canvas.htmlCanvas.width;
        let oldHeight = canvas.htmlCanvas.height;
        canvas.htmlCanvas.width = canvas.htmlCanvas.height = THUMBNAIL_SIZE;
        canvas.gl.viewport(0, 0, THUMBNAIL_SIZE, THUMBNAIL_SIZE);
        let images = [];
        for (var skin of this.skeletonData.skins) {
            this.skeleton.setSkin(skin);
            this.skeleton.setToSetupPose();
            this.skeleton.updateWorldTransform();
            let offset = new spine.Vector2(), size = new spine.Vector2();
            this.skeleton.getBounds(offset, size);
            camera.position.x = offset.x + size.x / 2;
            camera.position.y = offset.y + size.y / 2;
            camera.zoom = size.x > size.y ? size.x / THUMBNAIL_SIZE * 1.1 : size.y / THUMBNAIL_SIZE * 1.1;
            camera.setViewport(THUMBNAIL_SIZE, THUMBNAIL_SIZE);
            camera.update();
            renderer.begin();
            renderer.drawSkeleton(this.skeleton, true);
            renderer.end();
        }

        images.sort((a, b) => {
            return a.skinName > b.skinName ? 1 : -1;
        });
        canvas.htmlCanvas.width = oldWidth;
        canvas.htmlCanvas.height = oldHeight;
        renderer.resize(spine.ResizeMode.Expand);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.zoom = 1;
    }

    update(canvas, delta) {
        this.state.update(delta);
        this.state.apply(this.skeleton);
        this.skeleton.updateWorldTransform();
    }

    render(canvas) {
        let renderer = canvas.renderer;
        let camera = renderer.camera;
        renderer.resize(spine.ResizeMode.Expand);
        let offset = this.lastBounds.offset, size = this.lastBounds.size;
        camera.position.x = offset.x + size.x / 2;
        camera.position.y = offset.y + size.y / 2;
        camera.zoom = size.x > size.y ? size.x / this.canvas.htmlCanvas.width * 1.1 : size.y / this.canvas.htmlCanvas.height * 1.1;
        camera.update();

        canvas.clear(1, 1, 1, 0);
        renderer.begin();
        renderer.drawSkeleton(this.skeleton, true);
        renderer.end();
    }
}

export default class ComboParts extends Component {
	componentDidMount () {
		const {canvasSpine} = this
		new spine.SpineCanvas(canvasSpine, {
            pathPrefix: "/assets/",
			app: new AppSpine(this.props.parts, this.props.anim),
			webglConfig: {
				alpha: false
			}
		})
	}

	render() {
		return (
			<div>
				<canvas width={this.props.width} height={this.props.height} ref={c => this.canvasSpine = c }></canvas>
			</div>
		)
	}
}
