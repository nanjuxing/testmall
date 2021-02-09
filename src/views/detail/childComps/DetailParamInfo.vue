<template>
	<div v-if="Object.keys(paramInfo).length !== 0" class="params-wrap">
		<table v-for="(table,index) in paramInfo.sizes" :key="index" class="info-size" >
			<tr v-for="listitem in table" :key="listitem.index" class="rule-list-item" >
				<td v-for="td in listitem" :key="td">{{td}}</td>
			</tr>
		</table>
		<table class="info-param">
			<tr v-for="info in paramInfo.infos" :key="info.indey">
				<td class="info-param-key">{{info.key}}</td>
				<td class="params-value">{{info.value}}</td>
			</tr>
		</table>
		<div class="info-img" v-if="paramInfo.image.length !==0">
			<img src="paramInfo.image" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailParamInfo',
		props: {
			paramInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.params-wrap {
		padding:20px 15px;
		font-size: 14px;
		border-bottom: 5px solid #f2f5f8;
	
	}
	.params-wrap table {
		width: 100%;
		border-collapse: collapse;
	}

	.params-wrap table tr{
		height: 42px;
	}

	.params-wrap table tr td{
		border-bottom: 1px solid rgba(100,100,100,.1);
	}
	.info-param-key{
		// 当value的数据量比较大的时候，会挤出key ，所以给一个固定的宽度
		width: 95px;
	}

	.info-param{
		border-top:1px solid rgba(0,0,0,.1)
	}

	.params-value{
		color:#eb4868;
	}

	.info-img img{
		width:100%;
	}
</style>
