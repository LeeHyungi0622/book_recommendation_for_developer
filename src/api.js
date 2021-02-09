import axios from "axios";

// axios instance
export const api = axios.create({
    baseURL: "https://book.interpark.com/api/",
    params: {
        key: "072D09BB188D7374AE2D562CAABF26486DEE12926759F89362B5548DC5F85CDF",
        output: "json"
    }
})

// 책 관련 API method object
export const bookApi = {
    // 입력받은 categoryId에 해당하는 Best seller 책 정보
    getBestSeller: (categoryId) => api.get("bestSeller.api", {
        params: {
            categoryId
        }
    }),
    // 입력받은 categoryId에 해당하는 Recommend 책 정보
    getRecommend: (categoryId) => api.get("recommend.api", {
        params: {
            categoryId
        }
    }),
    // 입력받은 categoryId에 해당하는 새로 출간된 책 정보
    getNewBook: (categoryId) => api.get("newBook.api", {
        params: {
            categoryId
        }
    }),
    // 책의 상세정보(선택한 책의 isbn number기준)
    getDetail: (isbn) =>
        api.get("search.api", {
            params: {
                query: parseInt(isbn),
                queryType: "isbn"
            }
        }),
    // 책 검색(입력받은 검색어 기준)
    searchBook: (term) =>
        api.get("search.api", {
            params: {
                query: term
            }
        })
}