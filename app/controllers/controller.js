
export let renderFoodList = (foodArr) => {
    let contentHTML = "";
    foodArr.forEach((food) => {
        let { ma, ten, gia, khuyenMai, hinhAnh, moTa, loai, tinhTrang} = food;
        let trString= `<tr>
                            <td>${ma}</td>
                            <td>${ten}</td>
                            <td>${loai}</td>
                            <td>${gia}</td>
                            <td>${khuyenMai}</td>
                            <td>0</td>
                            <td>${tinhTrang}</td>
                            <td>
                            <button onClick=deleteFood(${ma}) class="btn btn-danger"> Xóa</button>
                        
                            <button onClick=editFood(${ma}) class="btn btn-warning">Sửa</button>
                            </td>
                        </tr>`;
        contentHTML = contentHTML + trString;
    });

    document.getElementById("tbodyFood").innerHTML = contentHTML;
}

export let showDataFood = (food) =>{
    document.getElementById("foodID").value = food.ma;
    document.getElementById("tenMon").value = food.ten;
    document.getElementById("loai").value = food.loai;
    document.getElementById("giaMon").value = food.gia;
    document.getElementById("khuyenMai").value = food.khuyenMai;
    document.getElementById("tinhTrang").value = food.tinhTrang;
    document.getElementById("hinhMon").value = food.hinhAnh;
    document.getElementById("moTa").value = food.moTa;
}