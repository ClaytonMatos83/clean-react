import { HttpPostClient, HttpPostParams } from "data/protocols/http/http-post-client"

export class HttpPostClientSpy implements HttpPostClient {
    url?: string

  async post (Params: HttpPostParams): Promise<void> {
      this.url = Params.url
      return Promise.resolve()
  }
}