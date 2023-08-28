const dao = require("../database/pageDAO");

const pageOperation=(start, total)=>{
    let page = {};
    const pageNum = 3;  //페이지 당 보여줄 개수
    const num = (total%pageNum===0)?0:1;
    page.totalPage = parseInt(total/pageNum)+num;
    page.startNum = (start-1)*pageNum+1;
    page.endNum = start*pageNum;
    return page;
}

const pageRead={
    list : async(start, total)=>{
        start = (start && start>1)?Number(start):1;
        const page = pageOperation(start, total);
        /*if(start && start>1{
            Number(start);
        }else{
            1;
        } */

        const list = await dao.daoRead.list(page.startNum, page.endNum);
        
        console.log("service : ", list);

        data ={};
        data.page = page;
        data.start = start;
        data.list = list.rows;
        console.log("data : ", data);
        
        return data;

    },
    content : async (num) =>{
        await pageUpdate.upHit(num); //await 없으면 값이 증가하기 전에 다음 코드 실행
        const data = await dao.daoRead.content(num);
        return data.rows[0];
    },
    totalContent : async () =>{
        const totalContent = await dao.daoRead.totalContent();
        console.log( totalContent );
        return totalContent.rows[0]['COUNT(*)'];
    }
}
const pageUpdate={
    upHit : async(num)=>{
        await dao.daoUpdate.upHit(num);
    }
}
const pageInsert = {
    write : async(body)=>{
        const result = await dao.daoInsert.write( body );
    }
}
module.exports = {pageRead, pageInsert, pageUpdate}