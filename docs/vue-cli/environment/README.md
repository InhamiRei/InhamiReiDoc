## Element-UI

+ 输入安装命令

```vue
npm i element-ui -S
cnpm i element-ui -S
```

+ 在main.js添加

```vue
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```

+ main.js全部代码

```vue
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## Echarts

+ 输入安装命令

```vue
npm i element-ui -S
cnpm i element-ui -S
```

+ 在main.js添加

```vue
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
```

+ 在vue页面添加

```vue
<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
```

```vue
mounted() {
    this.drawLine();
},
```

```vue
drawLine() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    // 绘制图表
    myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
}
```

::: danger 注意
 如果生成图表的时候报以下的错误
:::

<div align="center">
    <img :src="$withBase('/img/Echarts报错.png')" alt="Echarts报错.png">
</div>

+ 修改main.js的添加
```vue {1}
import echarts from 'echarts'
import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts
```

+ 按需加载Echarts

```vue 
// 按需加载
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';

// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';

// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    DatasetComponentOption,
    TransformComponent
} from 'echarts/components';

// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';

// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);
```