import{Case}from"@/components/portal";export default async function Page({params}:{params:Promise<{id:string}>}){return <Case id={(await params).id}/>}
