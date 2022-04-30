<template>
  <div id="message-list">
    <CardBox v-for="(cardContent, index) in cardList" :key="index" :cardContent="cardContent"/>
  </div>
</template>

<script>
import CardBox from "@/components/CardBox"

export default {
	name: "CardList",
	components: {
		CardBox
	},
	props: {
		cardList: {
			type: Array,
			default: () => new Array(5).fill({
				title: "Hello",
				message: "Hello World!",
				user: "unknown",
				timestamp: new Date().getTime()
			})
		}
	}
}
</script>
