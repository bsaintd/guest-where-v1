<template>
    <div class="checkout">
      <button @click="handleCheckout" :disabled="isCheckingOut">
        {{ isCheckingOut ? 'Processing...' : 'Notify Cleaners of Checkout' }}
      </button>
      <div class="tip-links">
        <h3>Leave a Tip</h3>
        <a :href="paypalLink" target="_blank" class="tip-button">PayPal</a>
        <a :href="cashappLink" target="_blank" class="tip-button">CashApp</a>
        <a :href="venmoLink" target="_blank" class="tip-button">Venmo</a>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    name: 'Checkout',
    props: {
      propertyId: { type: String, required: true },
    },
    data() {
      return {
        isCheckingOut: false,
        // Replace with your actual tipping links or logic
        paypalLink: 'https://paypal.me/username?amount=10',
        cashappLink: 'https://cash.app/$username',
        venmoLink: 'https://venmo.com/username',
      };
    },
    methods: {
      async handleCheckout() {
        this.isCheckingOut = true;
        try {
          // Replace with your API endpoint
          const response = await axios.post('https://api.example.com/checkout', {
            propertyId: this.propertyId,
            timestamp: new Date().toISOString(),
          });
          console.log('Checkout successful:', response.data);
          alert('Cleaners have been notified!');
        } catch (error) {
          console.error('Checkout failed:', error);
          alert('Something went wrong. Please try again.');
        } finally {
          this.isCheckingOut = false;
        }
      },
    },
  });
  </script>
  
  <style scoped>
  .checkout {
    margin-top: 20px;
  }
  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:disabled {
    background-color: #cccccc;
  }
  .tip-links {
    margin-top: 20px;
  }
  .tip-button {
    display: inline-block;
    margin: 5px;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
  }
  </style>