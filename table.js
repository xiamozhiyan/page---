function table(url,type,pageNum){
    $.ajax({
        url: url,
        type: type,
        data: {},
        dataType: "json",
        success: function(data) {
            //固定表头 表头数据可添加
            let str = `<tr><th>姓名</th><th>性别</th><th>年龄</th></tr>`;
            for(let i= 0;i < pageNum;i++){
                str += `<tr>
                             <td>${data[i].name}</td>
                             <td>${data[i].sex}</td>
                             <td>${data[i].age}</td>
                            </tr>`
            };
            $("tbody").html(str);
        }
    })
}