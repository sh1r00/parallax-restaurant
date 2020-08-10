<template>
  <v-col class="pa-0">
    <h1 class="section--text">
      Our Menu
    </h1>
    <v-parallax
      style="height: 50vh; width: 100%;"
      src="/page-images/coffee.jpg"
    />
    <v-col tag="section" class="menu">
      <h2 class="menu-title text-center">
        <span>
          {{ menu.title }}
        </span>
      </h2>
      <p class="menu-desctiption text-center">
        {{ menu.description }}
      </p>
      <div
        v-for="(category, index) in menu.categories"
        :key="index"
        class="menu-category"
      >
        <h3>
          {{ category.title }}
        </h3>
        <div v-for="(item, idx) in category.menuItems" :key="idx" class="box">
          <article>
            <div>
              <v-col class="menu-item-info">
                <v-flex column xs-10>
                  <p>
                    <strong>
                      {{ item.name }}
                    </strong>
                  </p>
                </v-flex>
                <v-flex column xs-10>
                  <p>
                    <strong>
                      {{ item.description }}
                    </strong>
                  </p>
                </v-flex>
                <v-flex column class="menu-item-price">
                  <p>${{ item.price }}</p>
                </v-flex>
              </v-col>
            </div>
          </article>
        </div>
      </div>
    </v-col>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        title: 'menu',
        description: 'description',
        categories: [
          {
            title: 'category1',
            menuItems: [
              {
                name: 'item1',
                description: 'its an item',
                price: '12'
              },
              {
                name: 'item2',
                description: 'its an item',
                price: '8'
              },
              {
                name: 'item3',
                description: 'its an item',
                price: '15'
              }
            ]
          },
          {
            title: 'category2',
            menuItems: [
              {
                name: 'item1',
                description: 'its an item',
                price: '12'
              },
              {
                name: 'item2',
                description: 'its an item',
                price: '8'
              },
              {
                name: 'item3',
                description: 'its an item',
                price: '15'
              }
            ]
          },
          {
            title: 'category3',
            menuItems: [
              {
                name: 'item1',
                description: 'its an item',
                price: '12'
              },
              {
                name: 'item2',
                description: 'its an item',
                price: '8'
              },
              {
                name: 'item3',
                description: 'its an item',
                price: '15'
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.edit-button {
  border: 1px solid transparent;
  margin: 2px;
  background-color: transparent;
}
.edit-button:hover {
  border-radius: 50%;
  border: 1px solid transparent;
  border-color: blue;
}
.delete-button {
  border: 1px solid transparent;
  margin: 2px;
  background-color: transparent;
}
.delete-button:hover {
  border-radius: 50%;
  border: 1px solid transparent;
  border-color: red;
}
.menu {
  max-width: 800px;
  margin: auto;
  padding: 2.5em 1em;
}
.menu > .menu-title {
  font: bold 45px/1.2 'Dancing Script', cursive;
}
.menu > .menu-description {
  font: 400 15px/1.2 'Libre Baskerville', serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #505015;
  margin: 0;
}
.menu-category {
  margin: 2em 3em;
}
.menu-category > h3 {
  font: 500 36px/1.2 'Dancing Script', cursive;
  border-bottom: 0.07em solid;
  width: fit-content;
  padding: 0;
  margin: 0.3em;
}
.menu-category .box {
  padding: 0.7rem 1rem;
}
.menu-category .box:not(:last-child) {
  margin-bottom: 12px;
  margin-bottom: 0.5rem;
}
.menu-item-image {
  width: 128px;
  height: 92px;
}
.menu-item-image v-img {
  height: 100%;
  width: 100%;
}
.menu-item-info {
  min-height: 92px;
  justify-content: center;
  align-items: center;
}
.menu-item-info .menu-item-price {
  text-align: right;
  font-weight: bold;
  font-family: 'Dancing Script';
  color: #1a1a1a;
}
</style>
