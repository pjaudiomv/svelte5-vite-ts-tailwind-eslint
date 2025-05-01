<script lang="ts">
  let count: number = $state(0);

  const increment = () => {
    count += 1;
  };
</script>

<div class="mx-auto mt-10 max-w-sm overflow-hidden rounded-lg bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
  <div class="px-6 py-6">
    <div class="mb-4 text-2xl font-bold text-gray-800">Great Scott!</div>
    <p class="mb-4 text-base text-gray-600">Click the button below to increase your gigawatt power level.</p>
    <button
      onclick={increment}
      class="flex w-full transform items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 font-bold text-white shadow-md transition-all duration-200 hover:scale-105 hover:from-purple-600 hover:to-pink-600"
    >
      <span class="mr-2">Count is {count}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div class="bg-gray-50 px-6 pt-4 pb-6">
    <div class="mb-2 font-medium text-gray-700">Popular Tags:</div>
    <span class="mr-2 mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-800 transition-colors duration-200 hover:bg-purple-200">#roads</span>
    <span class="mr-2 mb-2 inline-block rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-800 transition-colors duration-200 hover:bg-pink-200">#delorean</span>
    <span class="mr-2 mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800 transition-colors duration-200 hover:bg-blue-200">#88</span>
  </div>
</div>
