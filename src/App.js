import Card from "./Card";

function App() {
  let data=[
    {
      plan:"free",
      price:"0",
      users:"single user",
      isUsers:true,
      storage:"5GB storage",
      isStorage:true,
      publicProjects:"unlimited Public Projects",
      isPublicProjects:true,
      communityAcces:"Community Access",
      isCommunityAcces:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:false,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:false,
      subdomain:"Free Subdomain",
      isSubdomain:false,
      reports:"Monthly Status Reports",
      isReports:false




}
,{
  plan:"plus",
  price:"9",
  users:"5 Users",
  isUsers:true,
  storage:"50GB storage",
      isStorage:true,
      publicProjects:"unlimited Public Projects",
      isPublicProjects:true,
      communityAcces:"Community Access",
      isCommunityAcces:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      subdomain:"Free Subdomain",
      isSubdomain:true,
      reports:"Monthly Status Reports",
      isReports:false
},{
  plan:"pro",
  price:"49",
  users:"Unlimited  Users",
  isUsers:true,
      storage:"150GB storage",
      isStorage:true,
      publicProjects:"unlimited Public Projects",
      isPublicProjects:true,
      communityAcces:"Community Access",
      isCommunityAcces:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      subdomain:"Unlimited Free Subdomain",
      isSubdomain:true,
      reports:"Monthly Status Reports",
      isReports:true
}
  ]
 
  return <>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* <!-- Free Tier --> */}
      {/* <Card  data={data[0]}/>
      <Card data={data[1]}/>
      <Card data={data[2]}/> */}
      {
      data.map((e,i)=>{
        return <Card data={e} key={i}/>
      })
    }
    </div>
  </div>
</section>
  
    </>;
}

export default App;
