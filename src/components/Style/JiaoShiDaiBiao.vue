<template>
    <div class="teacher">
        <photo-frame :obj=t1 class="photo"></photo-frame>
        <photo-frame :obj=t2 class="photo"></photo-frame>
        <photo-frame :obj=t3 class="photo"></photo-frame>
        <photo-frame :obj=t4 class="photo"></photo-frame>
        <photo-frame :obj=t5 class="photo"></photo-frame>
        <photo-frame :obj=t6 class="photo"></photo-frame>
        <photo-frame :obj=t7 class="photo"></photo-frame>
        <photo-frame :obj=t8 class="photo"></photo-frame>
        <photo-frame :obj=t9 class="photo"></photo-frame>
        <photo-frame :obj=t10 class="photo"></photo-frame>
        <photo-frame :obj=t11 class="photo"></photo-frame>
        <photo-frame :obj=t12 class="photo"></photo-frame>
        <photo-frame :obj=t13 class="photo"></photo-frame>
        <photo-frame :obj=t14 class="photo"></photo-frame>
        <photo-frame :obj=t15 class="photo"></photo-frame>
        <photo-frame :obj=t16 class="photo"></photo-frame>
        <photo-frame :obj=t17 class="photo"></photo-frame>
        <photo-frame :obj=t18 class="photo"></photo-frame>
        <photo-frame :obj=t19 class="photo"></photo-frame>
    </div>
</template>

<script>
import PhotoFrame from '../common/PhotoFrame'

export default {
    components: {
        PhotoFrame
    },
    data() {
        return {
            t1: {
                photo: require('../../assets/teacher/1.jpg'),
                content: '陈褀褀'
            },
            t2: {
                photo: require('../../assets/teacher/2.jpg'),
                content: '付蔚'
            },
            t3: {
                photo: require('../../assets/teacher/3.jpg'),
                content: '高冬'
            },
            t4: {
                photo: require('../../assets/teacher/4.jpg'),
                content: '高非'
            },
            t5: {
                photo: require('../../assets/teacher/5.jpg'),
                content: '胡庆'
            },
            t6: {
                photo: require('../../assets/teacher/6.jpg'),
                content: '蒋青'
            },
            t7: {
                photo: require('../../assets/teacher/7.jpg'),
                content: '罗元'
            },
            t8: {
                photo: require('../../assets/teacher/8.jpg'),
                content: '闵绪国'
            },
            t9: {
                photo: require('../../assets/teacher/9.jpg'),
                content: '彭语良'
            },
            t10: {
                photo: require('../../assets/teacher/10.jpg'),
                content: '漆晶'
            },
            t11: {
                photo: require('../../assets/teacher/11.jpg'),
                content: '王睿'
            },
            t12: {
                photo: require('../../assets/teacher/12.jpg'),
                content: '王樱桃'
            },
            t13: {
                photo: require('../../assets/teacher/13.jpg'),
                content: '熊安萍'
            },
            t14: {
                photo: require('../../assets/teacher/14.jpg'),
                content: '袁帅'
            },
            t15: {
                photo: require('../../assets/teacher/15.jpg'),
                content: '张清华'
            },
            t16: {
                photo: require('../../assets/teacher/16.jpg'),
                content: '张琬悦'
            },
            t17: {
                photo: require('../../assets/teacher/17.jpg'),
                content: '郑继明'
            },
            t18: {
                photo: require('../../assets/teacher/18.jpg'),
                content: '周兴茂'
            },
            t19: {
                photo: require('../../assets/teacher/19.jpg'),
                content: '朱伟'
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .teacher {
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
        max-height: 675px;
        overflow-y: scroll;
    }
    .photo {
        margin-bottom: 15px;
        margin-right: 9px
    }

//
    ::-webkit-scrollbar {
        width: 30px;
    }
    ::-webkit-scrollbar-thumb {
        border: solid 1.5px #33157b;
        background: url('../../assets/scroll.png') no-repeat;
        background-size: 100% 100%;
    }
    ::-webkit-scrollbar-track {
        background: #c4f3f0;
        border: solid 3.5px #33157b;
    }
</style>