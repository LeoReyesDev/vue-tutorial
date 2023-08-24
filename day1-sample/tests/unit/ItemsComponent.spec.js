import { mount } from "@vue/test-utils";
import ItemsComponent from "../../src/components/ItemsFromMongo.vue";  // Replace with the actual path to your component

const mockJsonPromise = (data) => Promise.resolve(data);
const mockFetchPromise = (response) => Promise.resolve({
    json: () => mockJsonPromise(response),
});

global.Response = mockFetchPromise;


describe("ItemsComponent", () => {
    let mockFetch = jest.fn();

    // This will replace the global fetch with a mock function for testing
    beforeEach(() => {
        global.fetch = mockFetch;
    });

    it("fetches items on created lifecycle hook", async () => {
        mockFetch.mockResolvedValueOnce(mockFetchPromise([
            { _id: "1", name: "Test Item 1" },
            { _id: "2", name: "Test Item 2" }
        ]));


        const wrapper = mount(ItemsComponent);
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.items).toEqual([
            { _id: "1", name: "Test Item 1" },
            { _id: "2", name: "Test Item 2" }
        ]);
    });

    it("adds an item when 'Add Item' button is clicked", async () => {
        const newItem = { _id: "3", name: "Test Item 3" };
        //mockFetch.mockResolvedValueOnce(new Response(JSON.stringify(newItem)));
        mockFetch.mockResolvedValueOnce(mockFetchPromise([newItem]));

        const wrapper = mount(ItemsComponent);

        // Simulate adding new item
        await wrapper.setData({ newItem: "Test Item 3" });
        await wrapper.find("button").trigger("click");
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.items).toContainEqual(newItem);
    });


    // Similarly, other tests can be added for edit and delete functionality
});
