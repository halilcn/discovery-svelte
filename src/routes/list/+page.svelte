<script>
  import AddItem from "./AddItem.svelte";

  const { data } = $props();

  let items = $state(data.items);
  let editItemId = $state(null);

  let editItemTitle = $state({title:'', content:''});


  const deleteItem = async (id) => {
    const response = await fetch(`/api/list/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      items = items.filter((item) => item.id !== id);
    } else {
      console.error("Failed to delete item", response);
    }
  };

  const handleEditItem = (id) => {
    editItemId = id;

    const item = items.find((item) => item.id === id);
    editItemTitle = { title: item.title, content: item.content };
  };

  const handleAddItem = (item) => {
    items = [...items, item];
  };
</script>

<div>
  <div class="flex flex-col gap-2">
    <AddItem handleAddItem={handleAddItem} />
  </div>
  <div class="mt-4">
    {#await data.items}
      Loading items...
    {:catch error}
      Error loading items: {error.message || 'an error occurred'}
    {:then _}
      {#each items as item}
        {#if editItemId === item.id}
          <input class="border border-gray-300" value={editItemTitle.title} />
          <input class="border border-gray-300" value={editItemTitle.content} />
        {:else}
          <div class="border border-gray-300 p-2">
            <div>{item.title}</div>
        <div>{item.content}</div>
        <button onclick={() => deleteItem(item.id)}>Delete</button>
        <button onclick={() => handleEditItem(item.id)}>Edit</button>
      </div>
      {/if}
      
      {/each}
    {/await}
  </div>
</div>
