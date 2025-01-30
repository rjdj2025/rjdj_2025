

<script>
import { jsx } from 'vue/jsx-runtime';

    export default {
        name: 'learnjsx',
        data () {
            return {
               options: [{

               }]
            }
        },
        methods: {

        },
        render() {
            const moneyNode = (
                <p>{this.money > 99 ? 99 : this.money}</p>
            )
            
            return (
                <div>
                    {
                        /* jsx 的形式实现v-for v-model*/
                        
                        this.options.map(item => {
                            return (
                                <div value={item.value} item={item} oninput={this.handleChange}>{moneyNode}</div>
                            )
                        })
                    }
                </div>
            )
        }
    }
</script>