<template>
    <div>
         <div v-for="(v,i) in newgetdas" :key="i" class="all">
            <div class="f1">
                <div id="wf1"><img :src="v.lifearrimgurl" alt=""></div>
                <div class="wf2">
                    <div class="f3">{{v.lifearrname}}</div>
                    <div class="f4">{{v.lifearryuefen}}</div>
                </div>
                <div class="wf3" @click="funcc(i)">
                    <div>...</div>
                </div>
                 <div class="jubao" style="display:none">
                    <span></span>   
                    <div class="ju">举报</div>
                </div>
            </div>
            <div class="wf4">
                <!-- <img v-for="(v,i) in v.lifearrimgarr" :key="i" :src="v.img1" alt=""> -->
                <img  :src="v.lifearrimgarr2" alt=""><img  :src="v.lifearrimgarr2" alt="">
                <img  :src="v.lifearrimgarr3" alt=""><img  :src="v.lifearrimgarr4" alt="">
                <img  :src="v.lifearrimgarr5" alt=""><img  :src="v.lifearrimgarr6" alt="">
            </div>
            <div class="wf5">
                <div style="display:flex">
                    <p>价格接受程度：</p><Xing :starcal="v.lifearrid+'a'" :starnum="v.lifearrxing1"></Xing>
                </div>
                <div style="display:flex">
                    <p>价格接受程度：</p><Xing :starcal="v.lifearrid+'b'" :starnum="v.lifearrxing2"></Xing>
                </div>
                <div style="display:flex">
                    <p>推荐亲友意愿：</p><Xing :starcal="v.lifearrid+'c'" :starnum="v.lifearrxing3"></Xing>
                </div>
                
            </div>
            <div class="z1">        
                <strong class="shengluehao" @click="fun(i)" style="-webkit-line-clamp:3;-webkit-box-orient:vertical;">{{v.lifearrcontent}}</strong>
                <b  @click="fun(i)"  class="duo1">查看全文</b>   
            </div>
            <div class="z6">{{v.lifearrspan}}</div>
            <div class="z5">
                <div class="z4">
                <span class="iconfont icon-fenxiang" @click="funa()"></span>
                <span class="iconfont icon-dianzan" @click="funb(i)"><i>89</i></span>
                <span class="iconfont icon-liuyan"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Xing from "./xing"
export default {
    components:{
        Xing
    },
    props:{
        newgetdas:Array
    },
    data(){
        return{    
            bool:true,
            // jubao1:false
        }
    },
    methods:{
        fun(index){
                let barr=document.querySelectorAll(".shengluehao")
                let aarr=document.querySelectorAll(".duo1")
                if(barr[index].style.WebkitLineClamp=="3"){
                    barr[index].style.WebkitLineClamp=""
                    barr[index].style.WebkitBoxOrient=""
                    aarr[index].innerHTML="收起"
                }else{
                    barr[index].style.WebkitLineClamp="3"
                    barr[index].style.WebkitBoxOrient="vertical"
                    aarr[index].innerHTML="查看全文"
                    
                }
        },
       funb(index){
           let dianArr=document.querySelectorAll(".icon-dianzan")
           dianArr[index].style.color="red"
           dianArr[index].style.fontWeight=600
           dianArr[index].firstChild.innerHTML++
           
       },
       funcc(index){
            let jubao1=document.querySelectorAll(".jubao")
                // console.log(index)
            if(jubao1[index].style.display=="none"){
                jubao1[index].style.display="block"
            }else{
                jubao1[index].style.display="none"
            }
       }
    }

}
    
</script>

<style scoped>
    .all{

        border-radius: 0.2rem;
        margin: 0.2rem 0 ;
        box-shadow: 2px 3px 10px rgb(223, 47, 76);
        position: relative;
    }
    .jubao{
        position: absolute;
        top:0.3rem;
        right: 0.2rem;
        width:1.5rem;
    }
    .ju{
        width: 0.8rem;
        height: 0.5rem;
        position: absolute;
        background-color: rgb(175, 149, 138);
        top:0.4rem;
        font-size: 0.1rem;
        text-align: center;
        line-height: 0.5rem;
        right: 0.1rem;
        color: aliceblue;
    }
    .jubao>span{
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-bottom-color: rgba(138, 138, 122, 0.925);
        position: absolute;
        top:0.2rem;
        right: 0.1rem;
    }
    .f1{
        width: 100%;
        overflow: hidden;
        margin-top: 0.5rem;
        height: 1rem;
    }
    #wf1{
        float: left;
        width: 0.8rem;
        height:0.8rem ;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 0.4rem;
        margin-top: 0.2rem;
    }
    #wf1>img{
        width: 100%;
        height: 100%;
        float: left;
    }
    .f3{
        font-size: 0.3rem;
    }
    .f4{
        font-size: 0.1rem;
    }
    .wf2{
        float: left;
        padding: 0.2rem 0 0 0.2rem ;
    }
    .wf3{
        float: right;
        font-size: 0.5rem; 
        color: #ccc;
        margin-right: 0.3rem; 
    }
    .wf4{
        width: 100%;
        height: 4rem;
        text-align: center;
        margin-top: 0.3rem;
    }
    .wf4>img{
        width: 28%;
        height: 46%;
        padding: 0 0.1rem;
        border-radius: 0.3rem;
    }
    .wf5{
        height: 1.5rem;
        font-size: 0.2rem;
        margin: 0 0.4rem;
    }
    .wf5>div>p{
        /* width: 30%; */
        /* padding: 0 0.3rem; */
        color: black;
    }
    .wf5>div{
        margin: 0.15rem 0;
    }

    .wfe{
        font-size: 0.3rem;
        color: #ccc;
    }
    .z4{  
        height: 1rem;
        float: right;
        line-height: 1rem;
        margin-right: 0.3rem;
    }
    .z4>span{
        height: 1rem;
        display: inline-block;
    }
    .z5{
        height: 1rem;
    }
    .z6{
        padding: 0 0.35rem;
        font-size: 0.2rem;
        color: rgb(197, 114, 114);
    }
    .z1>img{
        width: 100%;
        height: 100%;
    }
    .z1>span{
        font-size: 0.3rem;
        line-height: 0.5rem;
        display: inline-block;
        color: #1d1b1b;
        padding: 0 0.2rem;
        /* height: 5rem; */
    }
    .z1>strong{
        font-weight: 200;
        font-size: 0.3rem;
        color: #1d1b1b;
        line-height: 0.5rem;
        display: -webkit-box; 
        overflow: hidden;
        padding: 0 0.35rem;
    }
    .duo1{
        font-size: 0.28rem;
        display: inline-block;
        position: absolute;
        margin-top: 0rem;
        right: 0.2rem;
        color: rgb(36, 187, 16);
        margin-right: 0.2rem;
        font-weight: 5000;
    }
    .icon-dianzan{
        position: relative;
    }
    .icon-dianzan>i{
        position: absolute;
        font-size: 0.1rem;
        font-style: normal;
        width: 0.1rem;
        height: 0.1rem;
        border-radius: 50%;
    }
</style>
