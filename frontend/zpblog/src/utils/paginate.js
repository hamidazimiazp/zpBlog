import _ from "lodash";

export const paginate = (posts, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const sliced = _(posts).slice(startIndex).take(pageSize).value();

    return sliced;
}