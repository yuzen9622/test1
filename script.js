

const use1 = document.getElementById("use-1");
const del = document.getElementById("use-2");
const allkg1 = document.getElementById("wg-1");
const use3 = document.getElementById("use-3");
const row3 = document.getElementById("row-3")
const delrow = document.getElementById("row-2")
const userow = document.getElementById("row-1")
const addrow = document.getElementById("appear");
const addtable = document.getElementsByClassName("add");
const reset = document.getElementById("delete")
function getall() {
    const use1v = use1.value;
    const delv = del.value;
    const use3v = use3.value;
    const allkg1v = allkg1.value;

    userow.value = parseFloat(use1v / allkg1v).toFixed(3);
    delrow.value = parseFloat(delv / allkg1v).toFixed(3);
    use3.value = parseFloat(use1v - delv).toFixed(3);
    row3.value = parseFloat((use1v - delv) / allkg1v).toFixed(3);



}
function add() {

    const addtable = $(".appen");
    const html = `<tr class="addtab">
    <td>收縮膜實領</td>
    <td>${use3.value} KG</td>
    <td>${row3.value}捲</td>

</tr>`;
    if (use3.value == "") {
        return;
    } else {
        addtable.append(html);
    }

    use1.value = "";
    del.value = "";
    allkg1.value = "";
    userow.value = "";
    delrow.value = "";
    use3.value = "";
    row3.value = "";

}

function deltee() {
    const addtable = $(".addtab");
    addtable.remove();
}
var day = new Date();
var date = day.getFullYear() + "年" + day.getMonth() + "月";

$('#btnExport').on('click', function () {
    if ($('.appen').find("tr").length > 0) {
        $("#table").table2excel({

            exclude: ".noExl",

            name: "Excel Document Name",

            filename: `用量計算${date}`,

            exclude_img: true,

            exclude_links: true,

            exclude_inputs: true

        });
    } else {
        return;
    }


});



reset.addEventListener('click', deltee)
addrow.addEventListener('click', add)
allkg1.addEventListener('input', getall)
use1.addEventListener("input", getall);
del.addEventListener("input", getall);