import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { getReviewsByProductId } from "@/data/reviews";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductPurchase } from "@/components/product/ProductPurchase";
import { PriceTag } from "@/components/product/PriceTag";
import { RatingStars } from "@/components/product/RatingStars";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BackButton } from "@/components/shared/BackButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return {
    title: product?.name ?? "Product",
    description: product?.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const productReviews = getReviewsByProductId(product.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
        <BackButton fallbackHref={`/shop?category=${product.category}`} label="Back" />
        <nav className="flex items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/shop" className="hover:text-foreground">
            Shop
          </Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category}`} className="capitalize hover:text-foreground">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} name={product.name} />
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {product.category} · {product.subcategory}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            {product.name}
          </h1>
          <RatingStars
            rating={product.rating}
            count={product.reviewCount}
            className="mt-3"
          />
          <PriceTag
            price={product.price}
            originalPrice={product.originalPrice}
            size="lg"
            className="mt-5"
          />
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            {product.description}
          </p>
          <div className="mt-8">
            <ProductPurchase product={product} />
          </div>
        </div>
      </div>

      <Tabs defaultValue="details" className="mt-16">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="mt-6 max-w-2xl">
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {product.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6 max-w-2xl space-y-6">
          {productReviews.length === 0 && (
            <p className="text-sm text-muted-foreground">No written reviews yet.</p>
          )}
          {productReviews.map((r) => (
            <article key={r.id} className="border-b border-border pb-5">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.date}</p>
              </div>
              <RatingStars rating={r.rating} className="mt-1" />
              <h3 className="mt-2 text-sm font-semibold">{r.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.comment}</p>
            </article>
          ))}
        </TabsContent>
        <TabsContent value="shipping" className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Free shipping on orders over ₹2,999. Standard delivery 3–6 working days. Easy
          14-day returns on unworn pieces with tags attached. Dummy storefront — no real
          fulfilment.
        </TabsContent>
      </Tabs>

      {related.length > 0 && (
        <section className="mt-20">
          <SectionHeader title="You may also like" eyebrow="Related" />
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
