<template>
    <div>
         <div style="background:white;font-size:.6rem;text-align:center;padding:10px 0;border-bottom:1px solid #E0DDDD" class="ssvs">
             确认订单
         </div>
          <div style="font-size:.3rem;padding:10px 15px;" @click="funl()">

                <strong > 请选择收货地址    </strong>       <span style="float:right">></span>
          </div>   

           <div style="height:.3rem;background:#E8E8E8"></div> 

           <div style="padding:10px 15px;font-size:.3rem">
               <span style="float:left">送达时间</span>
               <span style="float:right;color:#31B2EC">选择送达时间 ></span >
          </div>

          <div style="background:rgb(232, 232, 232);margin:15px 10px;padding:15px 10px;height:2rem" v-for="(v,i) in obj" :key="i">
               <img :src="v.shopImg" style="width:1rem">
               <ul style="float:right;font-size:.2rem; word-wrap: break-word;width:4rem;padding-right:1rem">
               
                     <li>商品名称:{{v.shopTitle}}</li>
                     <li>数量:{{v.shopNum}}</li>
                     <li>单价:￥{{v.shopPrice}}</li>

               </ul>
          </div>
                     
                      <div style="background:rgb(232, 232, 232);height:.3rem"></div>
          <div style="padding:10px 15px;height:.4rem">
              <span style="float:left;font-size:.3rem">抵用券</span>
              <span style="float:right;font-size:.3rem">-￥10.00</span>
         </div>
               <div style="height:.3rem;background:#E8E8E8"></div> 
      <div style="padding:10px 15px;height:.4rem;">
              <span style="float:left;font-size:.3rem">发票</span>
              <span style="float:right;font-size:.3rem">不开发票 ></span>
         </div>
                   <div style="height:.3rem;background:#E8E8E8"></div> 
      <div style="padding:10px 15px;height:.4rem;">
              <span style="float:left;font-size:.3rem">配送服务备注</span>
              <span style="float:right;font-size:.3rem;color:gray">贴心服务，选选看></span>
         </div>

                    <div style="height:2rem;background:#E8E8E8"></div> 
                 <div style="height:1.2rem"></div>
<!-- 底部 -->
           <div   class="btn">
            <span style="font-size:.4rem">合计</span>&nbsp;<span  style="font-size:.4rem;color:red" >:￥{{allprice}}</span>   <input type="button" value="提交订单"  @click="open()" style="height:1.2rem;width:2rem;
           border:none;outline:none;position:absolute;top:0px;right:15px;font-size:.3rem;background:#74C0FF;">

        </div>


  
       
    </div>
</template>


<script>

export default {
 
    data(){
        return{
            obj:[],
           
            allprice:0
          
         
        }
    },


    
     created(){
          var cid=this.$route.params.id
          // console.log( cid)

                       var parmers=new URLSearchParams();   
              
          // 调接口真正代码

                     
                  parmers.append("Ids",cid)
                  // console.log(typeof this.obj[i])
                this.axios({
                url:"http://39.97.247.47:9999/shop/loadByShopIdShowShop",
                // url: "/line/date",
                data:parmers,
                method: "post"
              }).then((val)=>{            
                            this.obj=val.data
                var price=0
            for (var i = 0; i <this.obj.length; i++) {
                price += this.obj[i].shopNum * this.obj[i].shopPrice;   
            }
            this.allprice = price;
                  
                           
                      })

      
  
    

                  

                
             







                  },  
                
                             
  


  
    // radi

    // 假数据
        // mounted() {

        // this.axios({
        //   url:"/line/date",
        //   method:"get"
        // }).then((val)=>{
           
            //    console.log(val.data.arr)
            // if(val.data.arr==""){
            //      this.bool=true
                
            // }else{
            //     this.bool=false
            // }
            
              // this.obj=val.data.arr
                  // this.bool=false;
    //     })

    //        this.$route.params.id
    //  },
    methods: {
      open() {
        const h = this.$createElement;
        var abv=this.allprice
        this.$msgbox({
          title: '确认支付',
          message: h('p', null, [
            h('span', null, '合计 '),
            h('i', { style: 'color: teal' }, abv),
            h('p', null, '支付方式 : 微信 支付宝 银行卡'),
          ]),
          showCancelButton: true,
          confirmButtonText: '支付',





       

          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '支付中...';
              setTimeout(() => {
            this.$router.push("/pdelivery")
                done();




                            
                                 var io=localStorage["userid"]
                                //  console.log(1)
                    this.axios({
                        url:"http://39.97.247.47:9999/order/paymentOrder",
                        method:"get",
                        params:{userId:io,oId:201907262158021}
                        }).then((ok)=>{
                    console.log(ok)}).catch((err)=>{console.log(err)})
                        
                    
    
                
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
                 
              }, 3000);
              
            } else {
              this.$router.push("/payment")
              done()
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: '支付成功'
          });
        });
      },
    funl(){

        this.$router.push("/myaddress")
    },

   
    }
   
    
}
</script>

<style scoped>
.btn{height:1.2rem;width:100%;border-top:1px solid gray;position:fixed;bottom:0rem;background:white;line-height:1.2rem;padding-left:15px;}




</style>
</style>
