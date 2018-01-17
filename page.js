function page(url,type,pageNum){
    // 模拟ajax数据用以下方法，方便用户更好的掌握用法
    //参数为当前页
    $.ajax({
        url: url,
        type: type,
        data: {},
        dataType: "json",
        success: function(data) {
            let  pages = Math.ceil(data.length/pageNum);
            //分页
            $("#page").paging({
                //默认从第几页开始
                pageNo: 1,
                //总页数
                totalPage: pages,
                //记录条数
                totalSize: data.length,
                //回调函数 参数num为按钮点击的页数 点击首页为1 尾页为 pages
                callback: function(num=1) {
                    console.log(num)
                    let start = (num-1)*pageNum;
                    let end = num*pageNum;
                    let str = `<tr><th>姓名</th><th>性别</th><th>年龄</th></tr>`;
                    for(let i= start;i < end;i++){
                        str += `
                            <tr>
                                <td>${data[i].name}</td>
                                <td>${data[i].sex}</td>
                                <td>${data[i].age}</td>
                            </tr>
                        `
                    };
                    $("tbody").html(str);
                }
            })
        }
    })
}