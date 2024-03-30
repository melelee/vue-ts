import {reactive} from "vue";
import axios from "axios";

export default function () {
    let dogList = reactive(["https://images.dog.ceo/breeds/dingo/n02115641_14084.jpg"])
    let dogUrl = "https://dog.ceo/api/breeds/image/random"

    async function getDog() {
        try {
            let result = await axios.get(dogUrl);
            dogList.push(result.data.message)
        } catch (e) {
            console.log(e)
        }
    }

    return {dogList, getDog}
}