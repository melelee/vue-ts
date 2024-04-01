import {defineStore} from "pinia";
import {reactive, ref} from "vue";

// export let useCountDemoStore = defineStore("CountDemo",
//
//     {
//         actions: {
//             increase: function asdasd(num: number) {
//                 this.sum += num;
//             }
//         },
//         state: () => {
//             return {
//                 sum: 666
//             }
//         },
//         getters: {
//             bigSum: state => state.sum * 100
//         }
//     }
// )


//组合式写法

export let useCountDemoStore = defineStore("CountDemo",
    () => {
        let sum = ref(111);
        let bigSum = ref(222);

        function increase(num: number) {
            sum.value += num;
        }

        // getters
        //     :
        // {
        //     bigSum: state => state.sum * 100
        // }

        return {sum, bigSum, increase}
    }
)
