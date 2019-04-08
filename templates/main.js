let singleLineTemplate = {
    template: '<div class="card"><header class="card-header card-header-title">{{message}}</header></div>',
    props:['message']
}

let multiLineTemplate ={
    template: `
        <div> class="card">
            <header class="card-header" card-header-title">
                {{message}}
            </header>
        </div>
    `,
    props:['message']
}

let xTemp = {
    template: '#x-template-component',
    props:['message'],
}

let renderComponent = {
    render(createElement) {
        return createElement('div', {
                'attrs': {
                    class: 'render-card'
                },
            }, [
                createElement('header', {
                    'attrs' : {
                        class: 'card-header card-header-title',
                    }
                }, this.message)
            ]
        );
    },
    props:['message'],
}

new Vue({
    el:'#app',
    data: {
        message: 'Greetings!',
    },
    components: {
        'single-line-template': singleLineTemplate, 
        'x-temp': xTemp,
        'render-component': renderComponent,
    }
})

