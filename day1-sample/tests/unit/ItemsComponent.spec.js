// import { mount } from "@vue/test-utils";
// import ItemsComponent from "../../src/components/ItemsFromMongo.vue";  // Replace with the actual path to your component

// const mockJsonPromise = (data) => Promise.resolve(data);
// const mockFetchPromise = (response) => Promise.resolve({
//     json: () => mockJsonPromise(response),
// });

// describe("ItemsComponent", () => {
//     let mockFetch;

//     beforeEach(() => {
//         mockFetch = jest.fn();
//         global.fetch = mockFetch;
//     });

//     it("fetches items on created lifecycle hook", async () => {
//         mockFetch.mockResolvedValueOnce(mockFetchPromise([
//             { _id: "1", name: "Test Item 1" },
//             { _id: "2", name: "Test Item 2" }
//         ]));

//         const wrapper = mount(ItemsComponent);
//         await wrapper.vm.$nextTick();

//         expect(mockFetch).toHaveBeenCalled();
//         expect(wrapper.vm.items).toEqual([
//             { _id: "1", name: "Test Item 1" },
//             { _id: "2", name: "Test Item 2" }
//         ]);
//     });

//     it("adds an item when 'Add Item' button is clicked", async () => {
//         const newItem = { _id: "3", name: "Test Item 3" };
//         mockFetch.mockResolvedValueOnce(mockFetchPromise(newItem));

//         const wrapper = mount(ItemsComponent);

//         // Simulate adding new item
//         await wrapper.setData({ newItem: "Test Item 3" });
//         await wrapper.find("button:contains('Add Item')").trigger("click");
//         await wrapper.vm.$nextTick();

//         expect(mockFetch).toHaveBeenCalled();
//         expect(mockFetch.mock.calls[0][0]).toBe("http://localhost:3000/items");
//         console.log(wrapper.vm.items);
//         expect(wrapper.vm.items).toContainEqual(newItem);
//     });

//     // Additional tests for edit and delete functionality can be added similarly.
// });
// import { shallowMount } from '@vue/test-utils'
// import ItemsComponent from "../../src/components/ItemsFromMongo.vue";

// // Mock the global fetch function
// global.fetch = jest.fn(() => Promise.resolve({
//     json: jest.fn(() => Promise.resolve([{ _id: '123', name: 'Test Item' }])),
//     ok: true,
// }));

// describe('ItemsComponent', () => {

//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     it('loads items on creation', async () => {
//         const wrapper = shallowMount(ItemsComponent);
//         await wrapper.vm.$nextTick(); // Wait for created() to resolve
//         expect(wrapper.vm.items).toEqual([{ _id: '123', name: 'Test Item' }]);
//     });

//     it('adds an item', async () => {
//         const wrapper = shallowMount(ItemsComponent);

//         wrapper.setData({ newItem: 'Another Test Item' });
//         await wrapper.vm.addItem();

//         expect(fetch).toHaveBeenCalledWith('http://localhost:3000/items', expect.anything());
//         expect(wrapper.vm.items).toHaveLength(2);
//     });

//     it('deletes an item', async () => {
//         const wrapper = shallowMount(ItemsComponent);

//         await wrapper.vm.deleteItem('123');
//         expect(fetch).toHaveBeenCalledWith('http://localhost:3000/items/123', expect.anything());
//         expect(wrapper.vm.items).toHaveLength(0);
//     });

//     // ... additional tests ...

// });

import { shallowMount } from '@vue/test-utils';
import ItemsFromMongo from '../../src/components/ItemsFromMongo';

describe('ItemsFromMongo', () => {
    it('does something', () => {
        const wrapper = shallowMount(ItemsFromMongo);
        // ..
        cosnole.log('WRAPPER', wrapper)
    });
});
