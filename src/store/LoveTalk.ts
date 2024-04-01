import {defineStore} from "pinia";
import {nanoid} from "nanoid";
import axios from "axios";

export let useLoveTalkStore = defineStore("LoveTalk",
    {
        actions: {
            addTalk: async function () {
                // 两次结构赋值，并重命名
                let {data: {content: talkContent}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
                this.talks.push({
                    id: nanoid(),
                    content: talkContent
                });
            }
        },
        state: () => {
            return {
                sum: 111,
                talks: JSON.parse(localStorage.getItem("talks") as string) || []
            }
        },
    }
);
