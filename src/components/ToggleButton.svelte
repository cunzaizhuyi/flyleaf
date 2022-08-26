<script>
  export let imgChecked="https://tse4-mm.cn.bing.net/th/id/OIP-C.cGGNewOo82RNOdjHnyHcMAAAAA?pid=ImgDet&rs=1";
  export let imgUnchecked="https://ts1.cn.mm.bing.net/th/id/R-C.cf59580e66343165cb761a1ab2aaf7e8?rik=E39R8u8Zk2mPng&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f18%2f07%2f02%2f56980234137c3b1a4fc26e860afae85a.jpg&ehk=XpqvmAYWaaPOPQnjjMhC7%2f2u7JeGF396wVdvWa3KMp4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1";
  export let checked=false;
  export let onChange=(status)=>{console.log(status)};
  export let type="img"
</script>

<img on:click={()=>{checked^=1;onChange(checked)}} src={checked?imgChecked:imgUnchecked}>
