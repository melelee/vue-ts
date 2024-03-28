// 接口
export interface User {
    id: number,
    name: string,
    age?: number
}

// 自定义类型
export type Users = Array<User>