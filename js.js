let val_arr = [
    ["", "", "", "2", "6", "", "7", "", "1"], // +>
    ["6", "8", "", "", "7", "", "", "9", ""],
    ["1", "9", "", "", "", "4", "5", "", ""],
    ["8", "2", "", "1", "", "", "", "4", ""],  // +>
    ["", "", "4", "6", "", "2", "9", "", ""],
    ["", "5", "", "", "", "3", "", "2", "8"],
    ["", "", "9", "3", "", "", "", "7", "4"],  //+>
    ["", "4", "", "", "5", "", "", "3", "6"],
    ["7", "", "3", "", "1", "8", "", "", ""],
];




let myarr1 = [[], [], [], [], [], [], [], [], []];
let myarr2 = [[], [], [], [], [], [], [], [], []];
let myarr3 = [[], [], [], [], [], [], [], [], []];
let myarr3_id = [[], [], [], [], [], [], [], [], []];
let selected_id;
let red_err_area = [];
let red_err_area3 = [];
let red_err_area3_id = [];
let old_val = "";


let block_my_key = () => {
    for (let m = 0; m < val_arr.length; m++) {
        for (let n = 0; n < val_arr[m].length; n++) {
            if (val_arr[m][n] != "") {
                let loc_var = m.toString() + n.toString();
                document.getElementById(loc_var).style.pointerEvents = "none";
                document.getElementById(loc_var).style.backgroundColor = "rgb(241 241 241)";
            }
        }
    }
}
block_my_key();

let click_me = (clicked_id) => {

    document.getElementById("selecter").style.pointerEvents = "all";
    document.getElementById(clicked_id).style.backgroundColor = "rgb(130, 232, 250)";
    selected_id = clicked_id;

    // alert(old_val)
    if (old_val != "") {
        document.getElementById(old_val).style.backgroundColor = "";
    }
    old_val = clicked_id;

}

let select_me = (put_id) => {
    document.getElementById(selected_id).style.backgroundColor = "";
    let se_id = document.getElementById(put_id).innerText;
    document.getElementById("selecter").style.pointerEvents = "none";
    let a_arr = selected_id.split("");
    val_arr[a_arr[0]].splice(a_arr[1], 1, se_id);
    fill_in_box();
    rules();
    change_bg();
    old_val = "";
}









let all_data = () => {
    myarr1 = [[], [], [], [], [], [], [], [], []];
    // let myarr1_val = 0;
    // let p = 0;
    // let q = 0;

    for (let m = 0; m < val_arr.length; m++) {
        for (let n = 0; n < val_arr[m].length; n++) {
            // console.log(myarr2[n] + " and " + myarr1[m][n]);
            myarr1[n].push(val_arr[m][n]);

        }
    }



}


let all_data2 = () => {
    myarr2 = [[], [], [], [], [], [], [], [], []];
    all_data();
    myarr2 = val_arr;


}


let all_data3 = () => {
    all_data();
    myarr3 = [[], [], [], [], [], [], [], [], []];
    let r_val = 0;
    let m_val = r_val + 2;
    let pp_val = 0;
    let pp1_val = pp_val + 2;
    // for (let i = 0; i <=  2; i++) {

    for (let m = 0; m < myarr1.length; m++) {
        for (let n = r_val; n <= m_val; n++) {
            for (let p = pp_val; p <= pp1_val; p++) {
                if (r_val > 8) {
                    r_val = 0;
                    m_val = r_val + 2;
                    n = r_val;
                    pp_val = pp_val + 3;
                    pp1_val = pp_val + 2;
                    n--;
                    break;
                } else {
                    myarr3[m].push(myarr1[n][p]);
                    myarr3_id[m].push(p.toString() + n.toString());
                }
            }
        }
        r_val = r_val + 3;
        m_val = r_val + 2;
    }


}

let rules = () => {

    red_err_area = [];
    red_err_area3 = [];
    red_err_area3_id = [];

    for (let m = 0; m < myarr2.length; m++) {
        for (let n = 0; n < myarr2[m].length; n++) {
            for (let p = 0; p < myarr2[m].length; p++) {

                if ((myarr2[m][n] == myarr2[m][p]) && (n != p) && (myarr2[m][n] != "") && (myarr2[m][p] != "")) {
                    let val_val = m.toString() + n.toString();
                    red_err_area.push(val_val);
                }
                if ((myarr2[n][m] == myarr2[p][m]) && (n != p) && (myarr2[n][m] != "") && (myarr2[p][m] != "")) {
                    let val_val2 = n.toString() + m.toString();
                    red_err_area.push(val_val2);
                }
                if ((myarr3[m][n] == myarr3[m][p]) && (n != p) && (myarr3[m][n] != "") && (myarr3[m][p] != "")) {
                    let val_val3 = m.toString() + n.toString();
                    red_err_area3.push(val_val3);
                }
            }
        }

    }
    for (let red_arr = 0; red_arr < red_err_area3.length; red_arr++) {

        let temp_val = red_err_area3[red_arr];
        temp_val.split("");
        const val1 = temp_val[0];
        const val2 = temp_val[1];
        red_err_area.push(myarr3_id[val1][val2]);
    }

}
let change_bg = () => {

    let val = false;
    for (let red_arr = 0; red_arr < red_err_area.length; red_arr++) {
        if (selected_id == red_err_area[red_arr]) {
            val = true
        }
    }
    if (val == true) {
        document.getElementById(selected_id).style.color = "red";
    } else {
        document.getElementById(selected_id).style.color = "";
    }

}
let fill_in_box = () => {

    for (let m = 0; m < val_arr.length; m++) {
        for (let n = 0; n < val_arr[m].length; n++) {
            let val_val = m.toString() + n.toString();
            document.getElementById(val_val).innerText = val_arr[m][n];

        }
    }
    all_data();
    all_data2();
    all_data3();

}
fill_in_box();

// let give_me_next = () => {
//     alert("data_change")
//     val_arr = [
//         ["3", "", "", "2", "6", "", "7", "", "1"], // +>
//         ["6", "8", "", "", "7", "", "", "9", ""],
//         ["1", "9", "", "", "", "4", "5", "", ""],
//         ["8", "2", "", "1", "", "", "", "4", ""],  // +>
//         ["", "", "4", "6", "", "2", "9", "", ""],
//         ["", "5", "", "", "", "3", "", "2", "8"],
//         ["", "", "9", "3", "", "", "", "7", "4"],  //+>
//         ["", "4", "", "", "5", "", "", "3", "6"],
//         ["7", "", "3", "", "1", "8", "", "", ""],
//     ];
//     fill_in_box();
//     rules();
//     block_my_key();

// }



