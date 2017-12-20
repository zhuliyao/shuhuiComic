



var initState = {
    footList:[
        {path:"/home",txt:"漫画",icon:"icon-svgmoban67"},
        {path:"/list",txt:"分类",icon:"icon-fenlei"},
        {path:"/search",txt:"搜索",icon:"icon-sousuo"},
        {path:"/my",txt:"订阅",icon:"icon-dingyue-copy"},
    ],
    mh:[],
    list1:[],
    ldetail:[],
    rexue:[],
    guochan:[],
    logindisabled:true,
    logincolor:"#e5e5e5",
    user:false,
    pwd:false,
    user:"",
    flag:"",
    book:[]

  
}


export default (state=initState,action)=>{
    switch(action.type){
        
      

        
        case "get_mh_success":
        state.mh = action.json;
        return Object.assign({},state);
        // console.log(state.mh)
        break;

        case "get_list1_success":
        state.list1 = action.json;
        // console.log(state.list1)
        return Object.assign({},state);
        break;

        case "get_rexue_success":
        state.rexue = action.json;
        return Object.assign({},state);
        break;

        case "get_guochan_success":
        state.guochan = action.json;
        // console.log(state.guochan)
        return Object.assign({},state);
        break;

        case "get_detail_success":
        state.ldetail = action.json;
        // console.log(state.ldetail)
        return Object.assign({},state);
        break;

        case "logindisabled":
        state.logindisabled = action.logindisabled;
        state.logincolor= action.color;
        
        return Object.assign({},state);
        break;

        case "local_success":
        state.user = action.zly;
        state.flag=action.flag;
        return Object.assign({},state);
        break;

        case "get_book_success":
        state.book = action.json;
        // console.log(state.book)
        return Object.assign({},state);
        break;

       

        default:
        return Object.assign({},state);
        break;
    }
}