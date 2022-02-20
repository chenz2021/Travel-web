
interface RecommendProductState {
    productList: any[],
    loading: boolean,
    error: string | null,
}

const defaultState: RecommendProductState = {
    loading: true,
    error: null,
    productList: [],
}

export default (state = defaultState, action) => {
    return state
}