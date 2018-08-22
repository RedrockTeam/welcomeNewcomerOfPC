<template>
    <div class="hongyan">
        <div class="title"><img src="../../assets/yhongyan.png"></div>
        <div class="introduction">重庆邮电大学红岩网校工作站是一个校园互联网开发学生团队。该团队自2000年创立以来，始终坚持以技术见长，充分结合同学们的话语体系和视觉风格建设网络平台，繁荣网络文化。红岩网校工作站在校团委老师的指导下，由学生自我管理，多年来走出了一大批优秀的IT人才，深受电信运营商和BAT等知名互联网企业的青睐。团队先后获评“全国五四红旗团支部”“团中央新媒体专业工作室”“重庆市IT杰出青年群体”等系列荣誉。红岩网校工作站属于校级学生组织，其中包括五个部门：产品策划及运营部，视觉设计部，Web研发部, 移动开发部和运维安全部。工作中，各个部门相互协作、共同进步，开发建设了重邮小帮手微信公众号、掌上重邮、BT down铺等一系列优秀的校园网络产品，深受广大师生好评。</div>
        <div class="department">
            <div class="name">【产品策划及运营部】</div>
            <div class="content">Ta是用户需求的倾听者，也是提出解决方案的总设计师。活跃在各部门之间，是促进各部门沟通的桥梁。Ta是创意的缔造者，拥有独特严谨的产品思维。一份原型图、一篇PRD可以让程序员和设计师开启工作模式，也可以写出优秀的文案对活动和产品形成强有力的助推，Office、Axure、Xmind等软件是Ta们的好帮手。产品策划及运营部旨在培养出优秀的产品经理，产品运营者和新媒体运营师。</div>
        </div>
        <div class="department">
            <div class="name">【视觉设计部】</div>
            <div class="content">Ta是设计产品图形用户界面，跟踪产品视觉及体验效果的设计师。需要经常同Photopshop、Adobe Illustrator打交道的Ta们，主要负责针对pc端、移动端、海报等界面的设计，团队协作设定产品整体界面视觉风格与创意规划，对设计成果进行定期评估和研究，进行视觉元素的优化设计。视觉设计部旨在设计出优秀的互联网产品，培养视觉设计师和UI设计师。</div>
        </div>
        <div class="department">
            <div class="name">【移动开发部】</div>
            <div class="content">Ta主要负责移动端产品的开发，以 Java & Kotlin，Objective-C & Swift为主要开发语言，涵盖Android、iOS两个平台。在这里你不但可以学到App开发，还能认识一大群志同道合的朋友。如果你对App开发感兴趣，对App制作有欲望，移动开发部将是你的秀场。来吧，如果你曾抱怨被大神虐哭，现在一个成为大神的机会等着你！</div>
        </div>
        <div class="department">
            <div class="name">【Web研发部】</div>
            <div class="content">Ta的职责包括“重邮小帮手”微信公众号、移动端／PC端网站开发、助力掌上重邮APP、提供强大的后台驱动等。目前分为前端和后端方向，前端主要采用html、css、JavaScript等利器，针对PC端、移动端等不同交互领域采用不同的设计风格与技术，将视觉无限的创意以行行代码形式转化为交互良好的网站页面，并通过一系列优化手段使用户体验达到最佳。后端主要负责将产品细致入微的现实需求转化为清晰的数据模型与业务逻辑，采用PHP、Java等开发语言操作数据库并进行严格的分析处理，掌控数据传递处理路上的每个流程，从而为网校提供最为坚实的数据后盾。</div>
        </div>
        <div class="department">
            <div class="name">【运维安全部】</div>
            <div class="content">Ta既是红岩网校运维安全部(内部称之为 网校 SRE ( Site Reliability Engineering ))，也是重庆邮电大学 Linux 协会( CQUPT Linux User Group )，主要负责维护网校的服务器稳定和安全，同时也负责新项目的部署、环境安全配置和性能优化，还负责了重庆邮电大学的公益项目：重庆邮电大学开源镜像站。Ta们使用 Python语言来开发好玩有趣的项目，在这里你可以利用服务器资源来搭建自己想做的任何项目。你要对技术执着、对高性能孜孜不倦，“如果不能优雅的解决这个问题，那我们就有了两个问题”。</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .hongyan {
        width: 89.4%;
        max-height: 700px;
        border: solid 6px #432a92;
        border-top: none;
        background: #d5fbff;
        padding: 25px 5%;
        overflow-y: scroll;
    }
    .title {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        img {
            width: 140px;
        }
    }
    .introduction {
        width: 100%;
        padding-top: 5px;
        padding-bottom: 30px;
        color: #432a92;
        line-height: 25px;
    }
    .department {
        width: 100%;
        color: #432a92;
        margin-bottom: 30px;
        .name {
            font-weight: 600;
        }
        .content {
            margin-top: 10px;
            line-height: 25px;
        }
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
