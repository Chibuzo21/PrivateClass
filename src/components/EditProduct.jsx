import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleProduct } from "../lib/getSingleProduct";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { productSchema } from "../lib/schema";
import { useMutation } from "@tanstack/react-query";
import { editProductFn } from "../lib/editProductFn";
import { toast } from "sonner";
import { Loader } from "lucide-react";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: productData } = useQuery({
    queryKey: ["products", id], //queryKey must be unique, the id inside the queryKey is used to differentiate this product from others
    queryFn: () => getSingleProduct(id),
  });
  const queryClient = useQueryClient();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: editProductFn,
    onSuccess: (updatedData) => {
      // queryClient.invalidateQueries(['products']) this will work in a real api
      queryClient.setQueryData(["products"], (old = []) =>
        old.map((p) => (p.id == id ? { ...p, ...updatedData } : p)),
      );

      toast.success("Your product has been updated successfully", {
        position: "top-right",
      });

      navigate("/");
    },
    onError: () => {
      toast.error("Failed to update", {
        position: "top-right",
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema), values: productData });

  const submitFn = (data) => {
    mutate({ id, ...data });
  };
  return (
    <main className='mx-auto max-w-5xl py-10'>
      <h1 className='text-2xl font-medium mb-5'>Edit your Product</h1>
      <form
        onSubmit={handleSubmit(submitFn)}
        className='grid grid-cols-2 gap-8'>
        <div>
          <input
            type='text'
            placeholder='Enter your title'
            {...register("title")}
          />
          <p>{errors.title?.message}</p>
        </div>
        <div>
          <input
            type='number'
            placeholder='Enter your price'
            {...register("price")}
          />
          <p>{errors.price?.message}</p>
        </div>
        <div>
          <input
            type='text'
            placeholder='Enter your image'
            {...register("image")}
          />
          <p>{errors.image?.message}</p>
        </div>
        <div>
          <select {...register("category")}>
            <option value={""} disabled>
              Select your category
            </option>
            <option value='Men'>Men</option>
            <option value='Women'>Women</option>
            <option value='Children'>Children</option>
          </select>
          <p>{errors.category?.message}</p>
        </div>
        <div className='col-span-2'>
          <textarea
            {...register("description")}
            rows={5}
            type='text'
            placeholder='Description...'></textarea>
          <p>{errors.description?.message}</p>
        </div>
        <div className='w-full flex gap-4'>
          <button
            disabled={isPending}
            className='px-4 flex gap-2 py-2 bg-blue-800 rounded-md text-white'
            type='submit'>
            {isPending ? (
              <>
                <Loader />
                "Saving..."
              </>
            ) : (
              "Save"
            )}
          </button>
          <button className='px-4 py-2 rounded-md border' type='reset'>
            Cancel
          </button>
        </div>
        <div>
          {isError && (
            <p className='text-red-500  w-full text-xs'>{error.message}</p>
          )}
        </div>
      </form>
    </main>
  );
}
