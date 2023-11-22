"use client";
import { ItemsListModel } from "@/lib/itemsListModel";
import { Card, Text } from "@tremor/react";

interface MyPromoProps {
  promoData: {
    promoBurguer: ItemsListModel[];
    promoPrato: ItemsListModel[];
  };
}

export default function MyPromo({ promoData }: MyPromoProps) {

  if (!promoData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-between max-w-1/2 mx-auto">
      {promoData.promoBurguer.length === 0 && promoData.promoPrato.length > 0 ? (
        promoData.promoPrato.map((data: any) => (
          <Card key={data.id} className="flex-1 m-2">
            <img src={data.image} alt={data.name} className="w-full h-auto" style={{ height: '200px', width: '200px', objectFit: 'cover' }} />
            <Text>{data.name}</Text>
            <Text>{data.price}</Text>
          </Card>
        ))
      ) : (
        promoData.promoBurguer.map((data: any) => (
          <Card key={data.id} className="flex-1 m-2">
            <img src={data.image} alt={data.name} className="w-full h-auto" style={{ height: '200px', width: '200px', objectFit: 'cover' }} />

            <Text>{data.name}</Text>
            <Text>{data.price}</Text>
          </Card>
        ))
      )}
      {promoData.promoBurguer.length === 0 && promoData.promoPrato.length === 0 && (
        <div>Não há promoções cadastradas</div>
      )}
    </div>
  );
}
