import React from 'react';

const Social = () => {
    return (
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Rejoignez-nous maintenant
          </h2>
          <div class="grid grid-cols-3 gap-3 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 dark:text-gray-400 justify-center align-items-center text-2xl">
            <a
              href="https://www.facebook.com/BuybyBlock-108855388552898"
              class="flex justify-center items-center"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/buybyblock/"
              class="flex justify-center items-center"
            >
             Linkedin
            </a>
            <a href="https://www.t.me/BuyByBlock" class="flex justify-center items-center">
             Telegram
            </a>
          </div>
        </div>
      </section>
    );
}

export default Social;
