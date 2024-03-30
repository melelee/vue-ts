import {createRouter, createWebHistory} from "vue-router";
import DogList from "@/pages/DogList.vue";
import ComputedDemo from "@/pages/ComputedDemo.vue";
import HelloWord from "@/pages/HelloWord.vue";
import RefDemo from "@/pages/RefDemo.vue";
import TypeDemo from "@/pages/TypeDemo.vue";
import UserList from "@/pages/UserList.vue";
import WatchDemo from "@/pages/WatchDemo.vue";
import WatchReactive from "@/pages/WatchReactive.vue";

let router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/dog",
            component: DogList
        },
        {
            path: "/computed",
            component: ComputedDemo
        },
        {
            path: "/hello",
            component: HelloWord
        },
        {
            path: "/ref",
            component: RefDemo
        },
        {
            path: "/type",
            component: TypeDemo
        },
        {
            path: "/user",
            component: UserList
        },
        {
            path: "/watch",
            component: WatchDemo
        },
        {
            path: "/watch-reactive",
            component: WatchReactive
        }
    ]
});
export default router;
