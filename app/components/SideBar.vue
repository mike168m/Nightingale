<template>
	<div class="side-bar"  v-bind:class="{side_bar_expanded : isOpen}" id="sidebar">
		<b-list-group class="sim-menu">
			<b-list-group-item v-for="item in simMenuItems">
				<div class="side-bar-item" v-on:click="item.onClick">
					<i v-bind:class="item.icon" class="mdi side-bar-item-icon"></i>
					<p class="side-bar-item-text">{{ item.name }}</p>
				</div>
			</b-list-group-item>
		</b-list-group>
		<b-list-group class="app-menu">
			<b-list-group-item v-for="item in appMenuItems">
				<div class="side-bar-item" v-on:click="item.onClick">
					<i v-bind:class="item.icon" class="mdi side-bar-item-icon"></i>
					<p class="side-bar-item-text">{{ item.name }}</p>
				</div>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<style lang="scss" >
    @import '../../static/theme_colors';
    #sidebar.side_bar_expanded {
    	width: 15em;
    }
	.side-bar {
		position: fixed;
		width:3em; height: 100%;
		max-width: 15em;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		background: white;
		font-family: inherit;
		transition: width ease-out 100ms;
		z-index: 100;
		@include default_box_shadow();
		
		// bootstrap overrides
		.list-group {
			border-left: 0px;
		}
		.list-group-item{
			padding: 0px; 
			width: 15rem;
			border-radius: 0px;
			border-left: 0px;
		}

		.app-menu {
			// set the bottom to an adequate number
			// to compensate for relative height of sidebar
			margin-bottom:4rem; 
			margin-top: auto;
		}

		.side-bar-item{
			display: inline-flex;
			flex-direction: row;
			height: 3rem;
			width: 100%;
			align-items: center;
			border-radius: 0px;
			transition: border-left-width ease-in 100ms;

			&:hover{
				border-left: 5px solid $primary-color;
			}

			.side-bar-item-icon{
				// font-size: 1.1rem;;
				flex: 0 0 3em;
				text-align: center;
				margin-left:0px;
				margin-right: 0px;
				color: $primary_color;

			}
			.side-bar-item-text {
				margin: 0px;
			}
		}


	}
</style>

<script>
import Vue from 'vue';

export default {
	name : 'SideBar',
	isOpen: false,
	created () {
		window.bus.$on('navBtnClicked', () => this.toggleNav())
	},
	data(){
		return {
			isOpen: false,
			simMenuItems:[
				{icon:'mdi-account ',          	name:'User',      	onClick: () => {  }},
				{icon:'mdi-timer',             	name:'Practice',  	onClick: () => { this.$router.push('practice'); }}, 
				{icon:'mdi-medical-bag',       	name:'Equipment', 	onClick: () => { this.$router.push('equipment'); }}, 
				{icon:'mdi-test-tube',       	name:'Simulation', 	onClick: () => { this.$router.push('simulation'); }}, 
				{icon:'mdi-chart-bar',         	name:'Review',    	onClick: () => { this.$router.push('review');}},
				{icon:'mdi-book-open-variant', 	name:'Tutorials', 	onClick: () => { this.$router.push('tutorials');}},
			],
			appMenuItems:[
				{icon: 'mdi-settings', name: 'Settings', onClick: () => {this.$router.push('settings');}},
				{icon: 'mdi-logout',   name: 'Logout', onClick: () => {window.bus.$emit('logoutBtnClicked');} }
			]
		}
	},
	methods:{
		toggleNav() {
			if(!this.isOpen) this.isOpen = true;
			else this.isOpen = false;
		}
	}
}
</script>

