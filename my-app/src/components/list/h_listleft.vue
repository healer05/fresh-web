<template>
<div>
    <div class="f-box">
        
        <div class="fruit-left" >
            <div v-for="(v,i) in Leftarr" :style='v.subclassId==1?"backgroundColor:white":""'  :key="i" @click="listleft(v.subclassId,i)" class="h-fruit">
                    <span>{{v.subclassName}}</span>
            </div>
        </div>
       

        <!-- 新鲜水果 -->
    </div>
        <!-- Click && Created-->
        <div class="fruit-right" v-if="Listbool"> 
            <Hlistright :Reinghtarr="Reinghtarr"></Hlistright>
        </div>
        <!-- List props -->
        <div class="fruit-right" v-else> 
            <Hlistright :Reinghtarr="ReinghtArr"></Hlistright>
        </div>
    </div>
    
</template>
<script>
import Hlistright from './h_listright'
export default {
    data() {
        return {
            ReinghtArr:[],
            // back:{
            //     backgroundColor:"bule"
            // }
        }
    },
    props:{
        Leftarr:Array,
        Reinghtarr:Array,
        Listbool:Boolean
    },
    components:{
        Hlistright
    },
    mounted(){
        let listdomarr=document.querySelectorAll(".h-fruit")
        console.log(listdomarr)
        if(listdomarr.length==0){

        }else{
            listdomarr[0].style.backgroundColor=" "
        }
    },
    methods: {
        listleft(id,n){
            let Listdomarr1=document.querySelectorAll(".h-fruit")
            for(let i=0;i<Listdomarr1.length;i++){
                if(i==n){
                    Listdomarr1[i].style.backgroundColor="white"
                }else{
                     Listdomarr1[i].style.backgroundColor="#f8f7f7"
                }
            }

            //  this.back="";
            this.Listbool=false
                localStorage.LeftId=id
            var listid=localStorage.Listid

            //right list content
            this.axios({
                url:"http://39.97.247.47:9999/agricultureProduct/findByCategoriesId",//get发送数据方式
                method:"get",
                params:{"categoriesId":1}
                //get发送数据方式
            }).then((ok)=>{
                // console.log(ok)
            this.ReinghtArr =ok.data;
            })


            // console.log(id)
            // this.axios({
            //     url:"/link/healer/hdata",//get发送数据方式
            //     method:"get",
            //     //  params:{id:Left}
            //      //get发送数据方式
            // }).then((ok)=>{
            //     var listarr= ok.data.filter((v,i)=>{
            //         if(v.id==listid){
            //             return v
            //         }
            //     });
            //     var reinghtarr=listarr[0].name.filter((v,i)=>{
            //         if(v.id==id){
            //             return v
            //         }
            //     });
            //     this.ReinghtArr=reinghtarr[0].special_offer
            // })

        }
       
    },
}
</script>
<style scoped>
.fruit-left{
    height: 100%;
    float: left;
    position: fixed;
    left: 0;
    top: 1.43rem;
    
}
.fruit-right{
    float: right;
    width: 5.5rem;
    /* background: aqua; */

}
/* .fruit-left div:first-child{
    background: #fff;
    

} */
.h-fruit{
    width: 2rem;
    height: 1rem;
    background-color:#f8f7f7;
    /* background: rosybrown; */
}
.h-fruit span{
    display: block;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 1rem;
    
    
}
</style>