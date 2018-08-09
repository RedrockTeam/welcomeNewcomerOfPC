<template>
    <div class="pagination">
        <div class="button prev" 
            @click="prevPage">上一页</div>
        <div class="button-list">
            <div :class="['button', {active: page === currentPage}]"
            v-for="page in currentPage+4"
            :key="page"
            @click="goPage(page)"
            v-show="isShow(page)">{{ page }}</div>
        </div>
        <div class="button next" 
            @click="nextPage">下一页</div>
    </div>
</template>

<script>
export default {
    props: {
        totalPages: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            currentPage: 1,
        }
    },
    methods: {
        goPage(page) {
            this.currentPage = page
        },
        isShow(page) {
            if (this.currentPage >= 4 && this.currentPage - page >= 3) {
                return false
            }
            else if (page > 5 && page - this.currentPage >= 3) {
                return false
            }
            else if (page > this.totalPages) {
                return false
            }
            else {
                return true
            }
        },
        prevPage() {
            if (this.currentPage > 1) this.currentPage--
        },
        nextPage() {
            if (this.currentPage < this.totalPages) this.currentPage++
        }
    }
}
</script>

<style lang="less" scoped>
    .pagination {
        width: 360px;
        height: 35px;
        display: flex;
        user-select: none;
    }
    .button {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        float: left;
        &:hover, &:active {
            background: rgba(60, 200, 255, 0.9);
            color: #fff;
        }
    }
    .active {
        background: rgba(60, 200, 255, 0.9);
        color: #fff;
    }
    .next {
        margin-left: 10px
    }
    .prev {
        margin-right: 10px;
    }
    .button-list {
        width: 67.6%;
        height: 100%;
    }
</style>


