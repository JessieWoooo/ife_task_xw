/**
 * Created by A_Jie on 2017/4/7.
 */
function main(str){
    var arr = str.split(",");
    if((isNaN(arr[0]) || isNaN(arr[1]) || isNaN(arr[2]))){
        return -1;
    }
    else{
        var a = parseInt(arr[0]);
        var b = parseInt(arr[1]);
        var c = parseInt(arr[2]);
        if(a==b || a==c || b==c){
            return -1;
        }
        if(a<0||a>9 || b<0 ||b>9 || c<0||b>9){
            return -1;
        }
        drr = [a,b,c];
        drr.sort(function (a,b) {
            return a-b;
        });
        var exit2 = arr.indexOf("2");
        var exit5 = arr.indexOf("5");
        var exit6 = arr.indexOf("6");
        var exit9 = arr.indexOf("9");
        if((exit2 !== -1) && (exit5 !== -1)){
            return  -1;
        }
        if((exit6 !== -1) && (exit9 !== -1)){
            return -1;
        }
        if(exit2 == -1 && exit5 == -1 && exit6 == -1 && exit9 == -1){
            var crr = [];
            crr[0] = drr[0];
            crr[1] = drr[1];
            crr[2] = drr[2];
            crr[3] = drr[0]*10+drr[1];
            crr[4] = drr[0]*10+drr[2];
            crr[5] = drr[1]*10+drr[0];
            crr[6] = drr[1]*10+drr[2];
            crr[7] = drr[2]*10+drr[0];
            crr[8] = drr[2]*10+drr[1];
            return crr[brr[2]-1];
        }
        if(exit2 !== -1 && exit5 == -1 && exit6 == -1 && exit9 == -1){
            brr = drr.concat([5]);
            brr.sort(function (a,b) {
                return a-b;
            });
            var crr = [];
            crr[0] = brr[0];
            crr[1] = brr[1];
            crr[2] = brr[2];
            crr[3] = brr[3];
            crr[4] = brr[0]*10+brr[1];
            crr[5] = brr[0]*10+brr[2];
            crr[6] = brr[0]*10+brr[3];
            crr[7] = brr[1]*10+brr[0];
            crr[8] = brr[1]*10+brr[2];
            return crr[drr[2]-1];
        }
        if(exit2 == -1 && exit5 !== -1 && exit6 == -1 && exit9 == -1){
            brr = drr.concat([2]);
            brr.sort(function (a,b) {
                return a-b;
            });
            var crr = [];
            crr[0] = brr[0];
            crr[1] = brr[1];
            crr[2] = brr[2];
            crr[3] = brr[3];
            crr[4] = brr[0]*10+brr[1];
            crr[5] = brr[0]*10+brr[2];
            crr[6] = brr[0]*10+brr[3];
            crr[7] = brr[1]*10+brr[0];
            crr[8] = brr[1]*10+brr[2];
            return crr[drr[2]-1];
        }
        if(exit2 == -1 && exit5 == -1 && exit6 !== -1 && exit9 == -1){
            brr = drr.concat([9]);
            brr.sort(function (a,b) {
                return a-b;
            });
            var crr = [];
            crr[0] = brr[0];
            crr[1] = brr[1];
            crr[2] = brr[2];
            crr[3] = brr[3];
            crr[4] = brr[0]*10+brr[1];
            crr[5] = brr[0]*10+brr[2];
            crr[6] = brr[0]*10+brr[3];
            crr[7] = brr[1]*10+brr[0];
            crr[8] = brr[1]*10+brr[2];
            return crr[drr[2]-1];
        }
        if(exit2 == -1 && exit5 == -1 && exit6 == -1 && exit9 !== -1){
            brr = drr.concat([6]);
            brr.sort(function (a,b) {
                return a-b;
            });
            var crr = [];
            crr[0] = brr[0];
            crr[1] = brr[1];
            crr[2] = brr[2];
            crr[3] = brr[3];
            crr[4] = brr[0]*10+brr[1];
            crr[5] = brr[0]*10+brr[2];
            crr[6] = brr[0]*10+brr[3];
            crr[7] = brr[1]*10+brr[0];
            crr[8] = brr[1]*10+brr[2];
            return crr[drr[2]-1];
        }
        if(exit2 !== -1 && exit5 == -1 && exit6 !== -1 && exit9 == -1){
            brr = drr.concat([5,9]);
            brr.sort(function (a,b) {
                return a-b;
            });
            var crr = [];
            crr[0] = brr[0];
            crr[1] = brr[1];
            crr[2] = brr[2];
            crr[3] = brr[3];
            crr[4] = brr[4];
            crr[5] = brr[0]*10+brr[1];
            crr[6] = brr[0]*10+brr[2];
            crr[7] = brr[0]*10+brr[3];
            crr[8] = brr[0]*10+brr[4];
            return crr[drr[2]-1];
        }
        if(exit2 !== -1 && exit5 == -1 && exit6 == -1 && exit9 !== -1){
            brr = drr.concat([5,6]);
            brr.sort(function (a,b) {
                return a-b;
            });
            var crr = [];
            crr[0] = brr[0];
            crr[1] = brr[1];
            crr[2] = brr[2];
            crr[3] = brr[3];
            crr[4] = brr[4];
            crr[5] = brr[0]*10+brr[1];
            crr[6] = brr[0]*10+brr[2];
            crr[7] = brr[0]*10+brr[3];
            crr[8] = brr[0]*10+brr[4];
            return crr[drr[2]-1];
        }
        if(exit2 == -1 && exit5 !== -1 && exit6 !== -1 && exit9 == -1){
            brr = drr.concat([2,9]);
            brr.sort(function (a,b) {
                return a-b;
            });
            var crr = [];
            crr[0] = brr[0];
            crr[1] = brr[1];
            crr[2] = brr[2];
            crr[3] = brr[3];
            crr[4] = brr[4];
            crr[5] = brr[0]*10+brr[1];
            crr[6] = brr[0]*10+brr[2];
            crr[7] = brr[0]*10+brr[3];
            crr[8] = brr[0]*10+brr[4];
            return crr[drr[2]-1];
        }
        if(exit2 == -1 && exit5 !== -1 && exit6 == -1 && exit9 !== -1){
            brr = drr.concat([2,6]);
            brr.sort(function (a,b) {
                return a-b;
            });
            var crr = [];
            crr[0] = brr[0];
            crr[1] = brr[1];
            crr[2] = brr[2];
            crr[3] = brr[3];
            crr[4] = brr[4];
            crr[5] = brr[0]*10+brr[1];
            crr[6] = brr[0]*10+brr[2];
            crr[7] = brr[0]*10+brr[3];
            crr[8] = brr[1]*10+brr[0];
            return crr[drr[2]-1];
        }
    }
}