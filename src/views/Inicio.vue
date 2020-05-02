<template>
    <div>
        <h1>Ruta protegida</h1>
        {{usuario}}
        <h3>{{usuario.email}}</h3>
    </div>
</template>
<script>
import { mapState} from 'vuex'
export default {
    name: 'Inicio',
    computed:{
        ...mapState(['usuario'])
    }
}
</script>