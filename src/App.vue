<script setup lang="ts">
import Landing from './components/Landing.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'
import { reactive, ref, onMounted } from 'vue'

const vSecondary = ref(true),
    vPrimary = ref(),
    vWork = ref(),
    vContact = ref()
let currentSection = 'landing'
let myElements: HTMLElement[] = []

onMounted(() => {
    const landing = document.getElementById('landing')
    const about = document.getElementById('about')
    const work = document.getElementById('work')
    const contact = document.getElementById('contact')
    if (landing != null) {
        myElements.push(landing)
    }
    if (about != null) {
        myElements.push(about)
    }
    if (work != null) {
        myElements.push(work)
    }
    if (contact != null) {
        myElements.push(contact)
    }
})

const setCurrentSection = async () => {
    myElements.forEach((element) => {
        if (isOutOfView(element.getBoundingClientRect())) {
            currentSection = element.id
        }
    })
    return currentSection
}

const isOutOfView = (pElement: DOMRect) => {
    return (
        pElement.top >= 0 &&
        pElement.left >= 0 &&
        pElement.right <=
            (window.innerWidth || document.documentElement.clientWidth) &&
        pElement.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
    )
}

const headerClass = reactive({
    'text-secondary': vSecondary,
    'text-primary': vPrimary,
})

window.addEventListener(
    'scroll',
    async (event) => {
        await setCurrentSection()
        if (currentSection == 'about' || currentSection == 'contact') {
            vSecondary.value = false
            vPrimary.value = true
        } else if (currentSection == 'landing' || currentSection == 'work') {
            vSecondary.value = true
            vPrimary.value = false
        }
    },
    true
)
</script>

<template>
    <div class="holster" dir="ltr" id="main">
        <header class="absolute w-full p-20 text-xl" :class="headerClass">
            <h1>
                <i class="fa-solid fa-code"></i>
                <span class="font-bold">LIAM HEYWOOD</span>
            </h1>
            <nav class="flex float-right" role="main">
                <button class="mr-6">about</button>
                <button class="mr-6">work</button>
                <button class="">contact</button>
            </nav>
        </header>
        <div class="w-full viewport y mandatory-scroll-snapping">
            <Landing id="landing" />
            <About id="about" />
            <Work id="work" />
            <Contact id="contact" />
        </div>
    </div>
    <main></main>
</template>
