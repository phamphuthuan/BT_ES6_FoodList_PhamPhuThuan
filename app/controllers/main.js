import { https } from "../service/service.js";
import { layThongTinTuForm} from "../controllers/controller-v1.js";
import { showDataFood } from "./controller.js";
import { renderFoodList } from "./controller.js";

var selectedId = null;

let fetchFoodList = () =>{
   https
   .get("/Food")
   .then((res) => {
      renderFoodList(res.data);
   })
   .catch((err) =>{
      console.log(err);
   });
};
//lần đầu load trang
fetchFoodList();


//xóa món
 function deleteFood(id){
    https
   .delete(`/Food/${id}`)
   .then((res) => {
      fetchFoodList();
      // sau khi xóa thành công => gọi lại api  lấy data mới nhất => update layout
      console.log(res);
   })
   .catch((err) =>{
      console.log(err);
   });
 }
 window.deleteFood = deleteFood;

//thêm món
 window.addFood = ()=> {
   let food = layThongTinTuForm();
   https
   .post("/Food", food)
   .then((res) => {
      $("#exampleModal").modal('hide');
      console.log(res);
      fetchFoodList();
   })
   .catch((err) =>{
      console.log(err);
   })
 };

 //lấy chi tiết chỉnh sửa
 window.editFood = (id)=> {
   selectedId = id;
   https
   .get(`/Food/${id}`)
   .then((res) => {
      $("#exampleModal").modal('show');
      showDataFood(res.data)
   })
   .catch((err) =>{
      console.log(err);
   })
 };

 window.updateFood = () =>{
   let food = layThongTinTuForm();
   https
   .put(`/Food/${selectedId}`, food)
   .then((res) => {
      $("#exampleModal").modal('hide');
      console.log(res);
      fetchFoodList();
   })
   .catch((err) =>{
      console.log(err);
   })
 };