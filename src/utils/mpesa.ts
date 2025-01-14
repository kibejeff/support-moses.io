interface MpesaResponse {
  MerchantRequestID: string;
  CheckoutRequestID: string;
  ResponseCode: string;
  ResponseDescription: string;
  CustomerMessage: string;
}

export const initiateMpesaPayment = async (phoneNumber: string, amount: number): Promise<MpesaResponse> => {
  try {
    const response = await fetch('YOUR_BACKEND_ENDPOINT/mpesa/stkpush', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber,
        amount: Math.ceil(amount),
      }),
    });

    if (!response.ok) {
      throw new Error('Payment initiation failed');
    }

    return await response.json();
  } catch (error) {
    throw new Error('Failed to initiate M-PESA payment');
  }
};