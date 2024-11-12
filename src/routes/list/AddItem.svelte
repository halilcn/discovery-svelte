<script>
  let title = $state("");
  let content = $state("");
  let error = $state(null);

  const { handleAddItem } = $props();

  const checkInput = () => {
    if (title.length === 0 || content.length === 0) {
      error = "Title and content are required";
      return false;
    }

    error = null;
    return true;
  };

  async function addItem() {
    if (!checkInput()) return;

    const response = await fetch("/api/list", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "content-type": "application/json",
      },
    });

    handleAddItem(await response.json());
  }
</script>

<div class="flex flex-col gap-2">
  <div>Add Item</div>
  <input class="border border-gray-300" type="text" bind:value={title} />
  <input class="border border-gray-300" type="text" bind:value={content} />
  {#if error}
    {error}
  {/if}
  <button class="border border-gray-300" onclick={addItem}>Add</button>
</div>
