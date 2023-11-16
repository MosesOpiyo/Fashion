<template>
    <div class="container">
            <p>&copy; 2023 Fashion. All rights reserved.</p>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <p>Contact us: <a href="mailto:info@yourstylishwebsite.com">info@fashion.com</a></p>
        </div>
</template>
<script>
export default {
  name: 'footerComponent',
}
</script>
<style>
.container {
    background-color: black;
            margin: 0 auto;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        li {
            display: inline-block;
            margin-right: 20px;
        }

        a {
            text-decoration: none;
            color: #fff;
            font-weight: bold;
        }

        p {
            margin: 10px 0;
        }
</style>