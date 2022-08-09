import React from 'react';

const SocialProof = () => {
    return (
      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">12% annuel</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">
                Nous comparons et sélectionnons les meilleurs biens.
              </dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">80+ projets</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">
                Immobilier résidentiel ou commercial, parking ou forêt, vous
                avez l’embarras du choix
              </dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">30 jours</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">
                Profitez des nouveaux deals en avant première avec les
                pré-ventes.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    );
}

export default SocialProof;
