Feature: Checkout
  As a customer
  I need to be able to checkout the selected products

Scenario: Order product
  Given Launch Application
  Then I login to the application
  Then I add 'Sauce Labs Backpack' product to cart
  Then I initiate checkout process 

