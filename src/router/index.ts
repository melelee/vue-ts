import {createRouter, createWebHistory} from "vue-router";
import DogList from "@/components/DogList.vue";
import ComputedDemo from "@/components/ComputedDemo.vue";
import HelloWord from "@/components/HelloWord.vue";
import RefDemo from "@/components/RefDemo.vue";
import TypeDemo from "@/components/TypeDemo.vue";
import UserList from "@/components/UserList.vue";
import WatchDemo from "@/components/WatchDemo.vue";
import WatchReactive from "@/components/WatchReactive.vue";

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
